import { NextRequest } from 'next/server';

import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import {
  collection,
  getDocs,
  query,
  where,
  Query,
  QueryConstraint,
} from 'firebase/firestore';
import { handler, CustomError } from '@/app/api/_lib/handler';

export const GET = handler(async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const category = searchParams.get('category');
  const tags = searchParams.get('tags');

  const queries: QueryConstraint[] = [];

  if (category && category !== 'ALL')
    queries.push(where('category', '==', category));
  if (tags) queries.push(where('tags', 'array-contains', tags));

  const blogListQuery: Query = query(
    collection(db, FIREBASE_COLLECTION_KEYS.BLOGS),
    ...queries
  );

  const querySnapshot = await getDocs(blogListQuery);
  if (querySnapshot.empty) throw new CustomError(404);

  const contents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const data = {
    contents,
  };

  return Response.json({ message: 'success', data }, { status: 200 });
});

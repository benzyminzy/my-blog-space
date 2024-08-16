export default async function BlogDetailPage({
  params,
}: Readonly<{
  params: { title: string };
}>) {
  const Article = await import(`./(post)/${params.title}.mdx`);
  const MDXContent = Article.default;

  return (
    <div className='text-center'>
      <MDXContent />
    </div>
  );
}

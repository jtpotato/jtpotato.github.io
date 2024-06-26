function Article({
  title,
  note,
  link,
  image,
}: {
  title: string;
  note: string;
  link: string;
  image?: string;
}) {
  return (
    <a href={link} target="_blank">
      <div className="relative rounded-lg overflow-clip w-96 shadow-md h-full">
        {image ? (
          <img src={image} className="w-full h-full object-cover" alt={title} />
        ) : (
          <div className="w-full h-full bg-neutral-800 text-white flex justify-center p-24">
            No Image
          </div>
        )}
        <div className="absolute bottom-0 p-4 bg-white/80 backdrop-blur-lg w-full">
          <p className="text-wrap">{title}</p>
          <p className="text-sm text-neutral-500">{note}</p>
        </div>
      </div>
    </a>
  );
}

export default Article;

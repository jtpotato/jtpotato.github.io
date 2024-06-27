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
          <>
            <img src={image} className="object-cover w-full h-40" alt={title} />
            <img
              src={image}
              className="absolute bottom-0 -z-10 object-cover w-full"
              alt={title}
            />
          </>
        ) : (
          <div className="bg-neutral-800 text-white flex justify-center p-24">
            No Image
          </div>
        )}
        <div className="p-4 backdrop-blur-lg bg-white/80">
          <p className="text-wrap line-clamp-1">{title}</p>
          <p className="text-sm text-neutral-500 line-clamp-1">{note}</p>
        </div>
      </div>
    </a>
  );
}

export default Article;

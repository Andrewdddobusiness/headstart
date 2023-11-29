export default function Video(props: { src: string }) {
  return (
    <div className="aspect-video  rounded-3xl overflow-hidden">
      <iframe
        className="w-full h-full"
        src={props.src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

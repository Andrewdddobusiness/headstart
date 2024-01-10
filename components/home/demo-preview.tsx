import Video from "@/components/home/video";

export default function DemoPreview() {
  return (
    <div>
      <div className="flex flex-col items-center mb-12 ">
        <p className="md:text-3xl text-xl text-center font-bold">
          not convinced yet?
        </p>
        <p className="md:text-xl text-sm text-center text-zinc-500">
          let's see after this 2-min video...
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-3/4">
          <Video src="https://www.youtube.com/embed/aGtiQEiKUMg?si=kWxvOP8CynLitRTw" />
        </div>
      </div>
    </div>
  );
}

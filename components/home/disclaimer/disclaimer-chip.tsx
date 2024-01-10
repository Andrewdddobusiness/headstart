import { Chip } from "@nextui-org/react";

export default function DisclaimerChip() {
  return (
    <div className="flex flex-col items-center mb-12">
      <Chip
        size="lg"
        variant="bordered"
        classNames={{
          base: " border-blue-500 shadow-blue-500/30 text-sm",
        }}
      >
        <span className="font-bold ">Disclaimer: </span>This is a
        proof-of-concept. Quality of builds are a work-in-progress.
      </Chip>
    </div>
  );
}

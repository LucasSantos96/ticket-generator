import Image from "next/image";

export default function Form() {
  return (
    <div className="flex  flex-col justify-center items-center mt-8">

      <div className="space-y-2">
          <h2>Upload Avatar</h2>
      <div className="flex rounded-md bg-custom w-xs  justify-center space-y-4 py-3 border border-dashed flex-col items-center">

        <div className="bg-custom rounded-md w-fit p-0.5 cursor-pointer">
          <Image
            src="/icon-upload.svg"
            alt="Icone upload"
            width={20}
            height={20}
            className="rounded-md w-7"
          />
        </div>
        <p className="text-custom">Drag and drop or click to upload</p>
      </div>

      <div className="flex gap-2 text-xs items-center">
          <Image
          src="/icon-info.svg"
                alt="Icone upload"
                width={20}
                height={20}
                className="rounded-md" />
                <p className="text-custom">Upload your photo (JPG or PNG, max size: 500KB).</p>
      </div>

      </div>


      <div className="mt-4">

        <form className="w-xs space-y-3">
            <p className="flex flex-col">
                Full Name
                <input className="border bg-custom rounded-md p-1.5 text-xs" type="text" id="inName" />
            </p>

            <p className="flex flex-col">
                Email Adress
                <input className="border bg-custom rounded-md p-1.5 text-xs" type="text" id="inEmail" placeholder="email@example.com" />
            </p>

            <p className="flex flex-col">
                GitHub Username
                <input className="border bg-custom rounded-md p-1.5 text-xs" type="text" id="ingithub" placeholder="@yourusername" />
            </p>

            <button type="submit" className="color-orange text-slate-950 font-semibold text-center w-xs p-1.5 rounded-md border-2 border-slate-800">Generate My Ticket</button>
        </form>
      </div>

    </div>
  );
}

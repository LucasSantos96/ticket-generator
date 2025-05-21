import Hero from "@/components/hero"
import Form from "@/components/form"
import UploadBox from "@/components/uploadBox"

export default function Home(){
  return(
    <main className="flex flex-col">
      <Hero/>
      <UploadBox/>
      <Form/>
    </main>
  )
}
import Hero from "@/components/hero"
import Form from "@/components/form"

export default function Home(){
  return(
    <main className="flex flex-col">
      <Hero/>
      <Form/>
    </main>
  )
}
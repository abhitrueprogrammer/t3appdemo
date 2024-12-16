import Link from "next/link";
const mockUrl = [
  "https://utfs.io/f/Oros6ZdEuogdnpgp58cGwdJbqBtS7lPFgramOehZ9fz0p1v4",
  "https://utfs.io/f/Oros6ZdEuogdVAxuHspdOF42pw6BznTcxA3Q0ivrJEeXCDbK",
  "https://utfs.io/f/Oros6ZdEuogdaeh8WIgsMXQSRYoe1h40mETUAkyOLGC3BKWr",
  "https://utfs.io/f/Oros6ZdEuogdkh9YgE2KWVDI3eCFjoxkY7lyM10XS4uaOs5b"
]

export default function HomePage() {
  return (
    <main className="">
      <div className=" flex flex-wrap gap-3">
        
          {[...mockUrl, ...mockUrl, ...mockUrl].map((image, index)=> 
            (
              <div key={index} className="w-44 h-40">
                <img className="w-full h-full object-cover mt-5" src={image}/>
              </div>
            )
          )}
        
      </div>
    </main>
  );
}

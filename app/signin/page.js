import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <h3 className="absolute top-1 left-3 text-primary font-bold text-2xl cursor-pointer"><Link href="/">Eqlize</Link></h3>
      <form className="h-[50%] w-[21%] flex flex-col justify-center items-center">
        <h3 className="text-primary-left w-[100%] text-[22px] font-bold">Balance Beyond Numbers.</h3>
        <h3 className="text-gray-400 w-[100%] text-[22px] mb-6 font-bold">Log in to your Eqlize account</h3>

        <Button className="w-[100%] mb-1.5 bg-white border-[0.5px] hover:bg-white-100 text-black">
          <FcGoogle className="mr-2 size-6" />
          Continue with Google
        </Button>

        <Button className="w-[100%] mb-4 bg-white border-[0.5px] hover:bg-white-100 text-black">
          <FaGithub className="mr-2 size-6" />
          Continue with GitHub
        </Button>

        <hr className="border-gray w-[100%] mb-4" />

        <Label className="text-left w-[100%] text-[12.5px] mb-1">Email</Label>
        <Input placeholder="Enter your email address..." className="mb-3" />

        <Button className="w-[100%] border-[0.5px] text-white bg-[#009688] hover:bg-[#00796b]">
          Continue
        </Button>
      </form>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggler";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Home page</h1>
      <DropdownMenu>dropdown</DropdownMenu>
      <ModeToggle></ModeToggle>
      <Button>Secondary</Button>
    </div>
  );
}

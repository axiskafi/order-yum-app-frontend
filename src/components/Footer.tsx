export default function Footer() {
  return (
    <div className="bg-sky-500 py-10">
      <div className="container mx-auto flex flx-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          OrderYUM.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
}

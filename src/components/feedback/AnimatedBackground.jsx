export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-50 pointer-events-none overflow-hidden bg-bone">
      <div className="absolute top-[15%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-[#8A3FFC] mix-blend-multiply opacity-30 blur-[96px] animate-focal-1" />
      <div className="absolute bottom-[20%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-[#FA9A73] mix-blend-multiply opacity-35 blur-[108px] animate-focal-2" />
      <div className="absolute top-[40%] right-[35%] w-[38vw] h-[38vw] rounded-full bg-[#80C2F1] mix-blend-multiply opacity-30 blur-[96px] animate-focal-3" />
      <div className="absolute bottom-[10%] left-[15%] w-[42vw] h-[42vw] rounded-full bg-[#DCC6FF] mix-blend-multiply opacity-25 blur-[100px] animate-focal-1" />
    </div>
  )
}

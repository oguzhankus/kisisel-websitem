import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-[#915eff]/20" />
          <div className="h-2 w-2 rounded-full bg-[#915eff] shadow-[0_0_15px_rgba(145,94,255,1)]" />
        </div>
      </span>
    </Html>
  );
};

export default Loader;

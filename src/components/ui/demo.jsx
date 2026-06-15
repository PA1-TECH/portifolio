import { GooeyText } from "./gooey-text-morphing";

function GooeyTextDemo() {
  return (
    <div className="gooey-text-demo-container">
      <GooeyText
        texts={["Design", "Engineering", "Is", "Awesome"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}

export { GooeyTextDemo };

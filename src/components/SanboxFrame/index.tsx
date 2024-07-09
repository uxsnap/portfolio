const LINKS = [
  {
    src: "https://creact.vercel.app",
    title: "hooks",
  },
];

export const SandboxFrame = ({ n = 0 }) => (
  <iframe
    {...LINKS[n]}
    style={{ width: "100%", height: "100%" }}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
);

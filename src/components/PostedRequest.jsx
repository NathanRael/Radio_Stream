import Badge from "./Badge";
import { Icon, IconLg } from "./Buttons";

const PostedRequest = () => {
  return (
    <section className="p-6 flex items-center flex-col justify-center gap-6 rounded-xl dark:border bg-light border-0 dark:bg-black dark:border-white-10 max-w-[464px]">
      <div className="max-md:flex-col max-md:gap-4 flex items-center justify-between w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lead text-black dark:text-white">
            Demande de musique
          </h1>
        </div>
        <Badge text="il y a 1 minute" />
      </div>
      <div className="line w-full"></div>
      <div className="text-black-60 dark:text-white-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        temporibus, non cupiditate dicta ab autem adipisci dolor. Blanditiis,
        nam! Repellat rerum iste saepe neque veritatis, provident maxime eos
        fugit ab!
      </div>
      <div className="line w-full "></div>
      <div className="w-full flex items-center justify-evenly">
        <Icon icon="bi bi-x-lg" color="btn-danger" />
        <Icon icon="bi bi-check" color="btn-success" />
      </div>
    </section>
  );
};

export default PostedRequest;

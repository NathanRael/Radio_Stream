import { useNavigate } from "react-router-dom";
import Badge from "./Badge";
import { ButtonIcon, Icon } from "./Buttons";

export const UserRequest = () => {
  const navigate = useNavigate();
  return (
    <section className="p-6 flex items-center flex-col justify-center gap-6 rounded-xl dark:border bg-light border-0 dark:bg-black dark:border-white-10 max-w-[464px]">
      <div className="flex items-center max-md:flex-col max-md:gap-4 justify-between w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lead text-black dark:text-white">
            Demande de musique
          </h1>
        </div>
        <div className="basis-1/2 flex  items-center justify-between w-full">
          <Badge text="il y a 1 minute" />
          <Badge text="Envoyée" color="btn-success" />
        </div>
      </div>
      <div className="line w-full"></div>
      <div className="text-black-60 dark:text-white-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        temporibus, non cupiditate dicta ab autem adipisci dolor. Blanditiis,
        nam! Repellat rerum iste saepe neque veritatis, provident maxime eos
        fugit ab!
      </div>
      <div className="line w-full"></div>
      <div className="flex max-md:flex-col justify-evenly w-full max-md:gap-4">
        <ButtonIcon
          icon="bi bi-pencil"
          text="Editer"
          color="btn-primary"
          handleClick={() => navigate("edit")}
        />
        <ButtonIcon
          icon="bi bi-trash"
          text="Supprimer"
          color="btn-danger btn-anim-custom"
        />
      </div>
    </section>
  );
};

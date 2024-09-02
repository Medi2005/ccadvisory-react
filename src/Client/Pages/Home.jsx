import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const Cards = [
    {
      iIcon: <FontAwesomeIcon icon={faUserTie} className="size-8 text-white" />,
      title: "Nombre des fichiers expedier",
      number: 2,
      color: `bg-conton`,
    },
    {
      iIcon: (
        <FontAwesomeIcon
          icon={faFileCircleQuestion}
          className="size-8 text-white"
        />
      ),
      title: "Nombre des fichiers traiter",
      number: 12,
      color: `bg-conton`,
    },
    {
      iIcon: (
        <FontAwesomeIcon
          icon={faFileCircleCheck}
          className="size-8 text-white"
        />
      ),
      title: "Nombre des fichiers en traitement",
      number: 11,
      color: `bg-conton`,
    },
  ];
  console.log(Cards)
  return (
    <>
      <div className="py-5 flex flex-row items-center justify-evenly">
        {Cards.map((card,index) => (
          <div className={`w-52 h-16 rounded-lg ${card.color} flex flex-row`} key={index}>
            <span className="w-12 h-full flex items-center justify-center">
              {card.iIcon}
              
            </span>
            <div className="w-160 h-full flex flex-col justify-center px-1.5 text-white font-poppins">
              <p className="text-xs">{card.title}</p>
              <p className="text-base font-medium">{card.number}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

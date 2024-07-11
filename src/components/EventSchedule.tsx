import { Container } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";

const eventSchedules = [
    {
        title: "PANEL SESSIONS  ",
        description: "Lorem ipsum dolor sit amet consectetur. Congue sapien nunc ut arcu ut non quis at. Imperdiet scelerisque ut venenatis dui mattis montes lorem urna at. Eu id nisl arcu.",
    },
    {
        title: "KEYNOTE/SPEAKING SESSIONS",
        description: "Lorem ipsum dolor sit amet consectetur. Congue sapien nunc ut arcu ut non quis at. Imperdiet scelerisque ut venenatis dui mattis montes lorem urna at. Eu id nisl arcu.",
    },
    // Add more event schedules as needed
];

const EventSchedule = () => {
  return (
    <Container pb={{ base: 8, md: 20 }} maxW={"6xl"} className="space-y-4  mx-auto px-10">
        <SectionTitle title="Event Schedule" />
      {eventSchedules.map((event, index) => (
        <div key={index} className="bg-[#FFFAF0] gap-2 items-center border border-[#361566] p-4 md:p-6 rounded-[8px] flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center justify-between" style={{width:"30%"}}>
            <div className="flex items-center space-x-2 md:space-x-2 flex-shrink-0">
                <img width={"36px"} src={"/assets/icons/calendar.svg"} alt={event.title} className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                    <h4>31st</h4>
                    <h4>August, 2024</h4>
                </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-2 flex-shrink-0">
                <img src={"/assets/icons/clock.svg"} alt={event.title} className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                    <h4>9:00AM</h4>
                    <h4>12:00PM</h4>
                </div>
            </div>
            <div></div>
        </div>
        <h2 style={{width:"20%"}} className="text-lg font-semibold">{event.title}</h2>
        

        <p style={{width:"50%"}} className="mt-2 text-sm md:text-base">{event.description}</p>
          
        </div>
      ))}
    </Container>
  );
};

export default EventSchedule;

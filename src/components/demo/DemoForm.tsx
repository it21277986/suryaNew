'use client';
import { FC, useState } from "react";
import RequestDemoForm from "@/components/demo/RequestDemoForm";
import Calendar, { TimeSlot } from "@/components/demo/Calandar"; 
import dayjs, { Dayjs } from "dayjs";

export interface formprop {
    date: Dayjs,
    timeSlot: TimeSlot
}

const INITIAL_DATA: formprop = {
    date: dayjs(),
    timeSlot: { startTime: '10:00 AM', endTime: '11:00 PM' },
}

const DemoPage: FC = () => {
    const [datapickerVisible, setDatapickerVisible] = useState(false);
    const [formValues, setFormValues] = useState<formprop>(INITIAL_DATA); // Moved state declaration above functions

    const handleDateSelect = (date: Dayjs) => {
        console.log('Selected date:', date.format('YYYY-MM-DD'));
        setFormValues(prev => ({
            ...prev,
            date
        }));
    };

    const handleTimeSlotSelect = (date: Dayjs, timeSlot: TimeSlot) => {
        console.log('Selected date and time:', date.format('YYYY-MM-DD'), timeSlot);
        setFormValues(prev => ({
            ...prev,
            date,
            timeSlot
        }));
    };

    return (
        <>
            <RequestDemoForm 
                datapickerVisible={datapickerVisible} 
                formValues={formValues} 
                setDatPickerVisible={setDatapickerVisible} 
            />
            {datapickerVisible && 
                <Calendar 
                    onDateSelect={handleDateSelect}
                    onTimeSlotSelect={handleTimeSlotSelect}
                    initialDate={dayjs()} // Optional: provide initial date
                    setDatPickerVisible={setDatapickerVisible}
                />
            }
        </>
    );
}

export default DemoPage;

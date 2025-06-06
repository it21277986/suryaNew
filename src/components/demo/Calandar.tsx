import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dayjs, { Dayjs } from 'dayjs';
import { formprop } from '@/components/demo/DemoForm';

interface RequestDemoFormProps {
    datapickerVisible: boolean;
    setDatPickerVisible: (value: boolean | ((prevState: boolean) => boolean)) => void;
    formValues: formprop
}

const DEFAULT_TIME_SLOTS: TimeSlot[] = [
  { startTime: '9:00 AM', endTime: '10:00 AM' },
  { startTime: '10:00 AM', endTime: '11:00 AM' },
  { startTime: '11:00 AM', endTime: '12:00 PM' },
  { startTime: '12:00 PM', endTime: '1:00 PM' },
];

export type TimeSlot = {
  startTime: string;
  endTime: string;
};

export type CalendarProps = {
  timeSlots?: TimeSlot[];
  onDateSelect?: (date: Dayjs) => void;
  onTimeSlotSelect?: (date: Dayjs, timeSlot: TimeSlot) => void;
  initialDate?: Dayjs;
  setDatPickerVisible: (value: boolean) => void;
};

const Calendar: React.FC<CalendarProps> = ({
  timeSlots = DEFAULT_TIME_SLOTS,
  onDateSelect,
  onTimeSlotSelect,
  initialDate = dayjs(),
  setDatPickerVisible, 
}) => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(initialDate);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const daysInMonth = (date: Dayjs): number => {
    return date.daysInMonth();
  };

  const firstDayOfMonth = (date: Dayjs): number => {
    return date.startOf('month').day();
  };

  const months: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const previousMonth = (): void => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const nextMonth = (): void => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handleDateClick = (day: number): void => {
    const newSelectedDate = currentDate.date(day);
    setSelectedDate(newSelectedDate);
    onDateSelect?.(newSelectedDate); // Send selected date to parent
};

const handleTimeSlotClick = (timeSlot: TimeSlot): void => {
    if (selectedDate) {
        onTimeSlotSelect?.(selectedDate, timeSlot); // Send selected date & time slot to parent
        setDatPickerVisible(false);
    }
};

  const isToday = (day: number): boolean => {
    const today = dayjs();
    return currentDate.month() === today.month() &&
      currentDate.year() === today.year() &&
      day === today.date();
  };

  const renderCalendar = (): JSX.Element[] => {
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);
    const days: JSX.Element[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12" />);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isSelected = selectedDate &&
        selectedDate.date() === day &&
        selectedDate.month() === currentDate.month() &&
        selectedDate.year() === currentDate.year();

      const isTodayDate = isToday(day);

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`h-20 w-full rounded-full flex items-center justify-center
            ${isSelected ? 'bg-[#2565AE] text-white' :
              isTodayDate ? 'border-2 border-[#2565AE]' : 'hover:bg-blue-50'}
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const formatDate = (date: Dayjs): string => {
    return date.format('MMMM YYYY');
  };

  const formatSelectedDate = (date: Dayjs): string => {
    return date.format('MMMM D, YYYY');
  };

  return (
    <div className="flex gap-6 w-full max-w-5xl mx-auto pb-10">
      <div className="flex-1 bg-white rounded-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-blue-50 rounded-full"
          >
            <ChevronLeft className="h-10 w-10 text-primary-500" />
          </button>
          <h2 className="text-lg font-semibold">
            {formatDate(currentDate)}
          </h2>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-blue-50 rounded-full"
          >
            <ChevronRight className="h-10 w-10 text-primary-500" />
          </button>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-1 mb-5">
          {days.map(day => (
            <div key={day} className="text-center text-black-500 text-sm">
              {day.toUpperCase()}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-5">
          {renderCalendar()}
        </div>
      </div>

      {/* Time slots sidebar */}
      <div className="w-64 bg-white rounded-xl p-1">
        {selectedDate ? (
          <>
            <h3 className="font-semibold text-lg mb-4">
              {formatSelectedDate(selectedDate)}
            </h3>
            <div className="space-y-4">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeSlotClick(slot)}
                  className="border-primary text-primary regular-17 p-4 rounded-[5px] w-full sm:w-3/4 hover:bg-[#EFF6FF]"
                  style={{ border: '1px solid blue' }}
                >
                  {slot.startTime} - {slot.endTime}
                </button>
              ))}
            </div>
            {/* <div className='pt-4'>
              <button className='text-white text-center py-2 px-2 w-full pl-6 pr-6 h-[42px] font-medium regular-17 rounded-[5px]' 
                style={{ background: 'linear-gradient(90deg, #0176FE 0%, #175AA9 100%)' }}>
                Next
              </button>
            </div> */}
          </>
        ) : (
          <div className="text-gray-500 text-center"> 
            Select a date to view available time slots
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
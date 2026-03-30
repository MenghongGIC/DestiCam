import { Component, createSignal } from "solid-js";
import { For } from "solid-js";
import styles from "./calendar.module.css";

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
}

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const Calendar: Component<CalendarProps> = (props) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = createSignal(today.getFullYear());
  const [currentMonth, setCurrentMonth] = createSignal(today.getMonth());
  const [selectedDate, setSelectedDate] = createSignal<Date | null>(null);

  const firstDayOfMonth = () => new Date(currentYear(), currentMonth(), 1).getDay();
  const daysInMonth = () => new Date(currentYear(), currentMonth() + 1, 0).getDate();

  const prevMonth = () => {
    if (currentMonth() === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (currentMonth() === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const handleSelect = (day: number) => {
    const date = new Date(currentYear(), currentMonth(), day);
    setSelectedDate(date);
    props.onDateSelect?.(date);
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth() === today.getMonth() &&
    currentYear() === today.getFullYear();

  const isSelected = (day: number) => {
    const s = selectedDate();
    return s !== null &&
      s.getDate() === day &&
      s.getMonth() === currentMonth() &&
      s.getFullYear() === currentYear();
  };

  return (
    <div class="calendar">
      <div class="calendar-header">
        <button onClick={prevMonth}>‹</button>
        <span>{MONTHS[currentMonth()]} {currentYear()}</span>
        <button onClick={nextMonth}>›</button>
      </div>

      <div class="calendar-grid">
        <For each={WEEKDAYS}>
          {(day) => <div class="weekday">{day}</div>}
        </For>

        <For each={Array(firstDayOfMonth()).fill(null)}>
          {() => <div />}
        </For>

        <For each={Array(daysInMonth()).fill(null)}>
          {(_, i) => {
            const day = i() + 1;
            return (
              <div
                class={`day ${isToday(day) ? "today" : ""} ${isSelected(day) ? "selected" : ""}`}
                onClick={() => handleSelect(day)}
              >
                {day}
              </div>
            );
          }}
        </For>
      </div>

      {selectedDate() && (
        <p class="selected-label">
          Selected: {selectedDate()!.toDateString()}
        </p>
      )}
    </div>
  );
};

export default Calendar;
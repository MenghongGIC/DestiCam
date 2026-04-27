import { createSignal, JSX, onMount, Show } from "solid-js";
import dayjs from "dayjs";
import styles from "./index.module.css";

// Usage:
// import Datepicker from "~/components/Datepicker";
// <Datepicker />

// ---- Types ----

type DateString = string; // ISO format: "YYYY-MM-DD"

interface CalendarDateElement extends HTMLElement {
  value: DateString;
}

interface CalendarChangeEvent extends Event {
  target: CalendarDateElement;
}

interface DatepickerProps {
  label?: string;
  default_date?: DateString;
  onChange?: (value: DateString) => void;
  label_class?: string;
  datepicker_class?: string;
}

// ---- Augment JSX for cally web components ----

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "calendar-date": JSX.HTMLAttributes<CalendarDateElement> & {
        value?: DateString;
        onChange?: JSX.EventHandlerUnion<CalendarDateElement, CalendarChangeEvent>;
      };
      "calendar-month": JSX.HTMLAttributes<HTMLElement>;
    }
  }
}

// ---- Component ----

export default function Datepicker({
  label,
  default_date,
  onChange = () => {},
  label_class,
  datepicker_class,
}: DatepickerProps): JSX.Element {
  let popover_ref!: HTMLDivElement;

  const [mounted, setMounted] = createSignal(false);
  const [isOpen, setIsOpen] = createSignal(false);
  const [currentDate, setCurrentDate] = createSignal<DateString | undefined>(default_date);

  const formattedDate = (): string =>
    currentDate() ? dayjs(currentDate()).format("MM/DD/YYYY") : "MM/DD/YYYY";

  const handleDateChange = (e: Event | CalendarChangeEvent): void => {
    const value = (e as CalendarChangeEvent).target.value;
    setCurrentDate(value);
    onChange(value);
  };

  onMount(() => {
    setMounted(true);
    popover_ref.addEventListener("toggle", () => {
      setIsOpen(popover_ref.matches(":popover-open"));
    });
  });

  return (
    <div class={styles.container}>
      <label for="cally1" class={`${styles.label} ${label_class ?? ""}`}>
      </label>

      <button
        popoverTarget="cally-popover1"
        class={`input input-border ${styles.btn} ${datepicker_class ?? ""}`}
        id="cally1"
        style="anchor-name: --cally1"
        type="button"
      >
        {formattedDate()}
        <CalendarIcon />
      </button>

      <div
        ref={popover_ref}
        popover
        id="cally-popover1"
        class="dropdown bg-base-100 rounded-box shadow-lg"
        style="position-anchor: --cally1"
      >
        <Show when={mounted() && isOpen()}>
          <calendar-date onChange={handleDateChange} value={currentDate()}>
            <PrevIcon />
            <NextIcon />
            <calendar-month />
          </calendar-date>
        </Show>
      </div>
    </div>
  );
}

// ---- Icon subcomponents ----

function CalendarIcon(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function PrevIcon(): JSX.Element {
  return (
    <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

function NextIcon(): JSX.Element {
  return (
    <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}
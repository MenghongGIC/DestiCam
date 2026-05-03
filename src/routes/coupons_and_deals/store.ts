import { createSignal } from "solid-js";
import type { DealItem, DealType } from "./data";

const [detailItem, setDetailItem] = createSignal<DealItem | null>(null);
const [detailType, setDetailType] = createSignal<DealType>("hotel");

export { detailItem, setDetailItem, detailType, setDetailType };

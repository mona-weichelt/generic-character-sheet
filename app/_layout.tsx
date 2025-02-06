import { Stack } from "expo-router";
import "../global.css";
import { SheetProvider } from "@/hooks/useSheetContext";

export default function RootLayout() {
  return (
    <SheetProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SheetProvider>
  );
}

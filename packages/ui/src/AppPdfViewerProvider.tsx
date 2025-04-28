"use client";
import { RPConfig, type RPConfigProps } from "@pdf-viewer/react";
import { type PropsWithChildren } from "react";

function AppPdfViewerProvider({
	children,
	...props
}: PropsWithChildren<RPConfigProps>) {
	return <RPConfig {...props}>{children}</RPConfig>;
}
export default AppPdfViewerProvider;

export type { RPConfigProps };

"use client";
import dynamic from "next/dynamic";
import { type PropsWithChildren } from "react";
import { type RPConfigProps } from "@repo/ui/AppPdfViewerProvider";

export const LazyAppPdfViewerProvider = dynamic<
	PropsWithChildren<RPConfigProps>
>(() => import("@repo/ui/AppPdfViewerProvider").then((mod) => mod.default), {
	ssr: false,
});

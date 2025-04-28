"use client";
import dynamic from "next/dynamic";
import type { Props } from "@repo/ui/AppPdfViewer";

export const LazyAppPdfViewer = dynamic<Props>(
	() => import("@repo/ui/AppPdfViewer"),
	{
		ssr: false,
	}
);

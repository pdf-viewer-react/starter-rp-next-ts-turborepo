"use client";
import {
	RPProvider,
	RPDefaultLayout,
	RPPages,
	type RPLayoutProps,
	type RPProviderProps,
} from "@pdf-viewer/react";

export interface Props {
	showToolbar?: boolean;
	providerProps?: RPProviderProps;
	defaultLayoutProps?: RPLayoutProps;
}

const AppPdfViewer = (props: Props) => {
	const { showToolbar = true, providerProps, defaultLayoutProps } = props;

	return (
		<RPProvider
			src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
			{...providerProps}>
			{showToolbar ? (
				<RPDefaultLayout {...defaultLayoutProps}>
					<RPPages />
				</RPDefaultLayout>
			) : (
				<div style={{ width: "100%", height: "550px" }}>
					<RPPages />
				</div>
			)}
		</RPProvider>
	);
};

export default AppPdfViewer;

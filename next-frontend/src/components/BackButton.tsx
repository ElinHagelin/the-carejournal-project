"use client";

export default function BackButton() {
	const handleBack = () => {
		window.history.back();
	};

	return (
		<button onClick={handleBack}>
			Back
		</button>
	);
}

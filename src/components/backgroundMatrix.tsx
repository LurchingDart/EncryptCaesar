"use client";
import React from "react";
import { MatrixEffect } from "@/components/animations/matrixEffect";

export function BackgroundMatrix() {
    return (
        <div className="fixed top-0 left-0 h-full w-full">
            <MatrixEffect
                animationSpeed={5}
                containerClassName="bg-transparent"
                colors={[
                    [77, 255, 207],
                    [178, 255, 0],
                ]}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                dotSize={2}
            />
        </div>
    );
}

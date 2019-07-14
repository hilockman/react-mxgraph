// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../react

declare module 'react-mxgraph' {
    export * from "react-mxgraph/components/Flow";
}

declare module 'react-mxgraph/components/Flow' {
    import * as React from "react";
    import { ICanvasEdge, ICanvasNode } from "react-mxgraph/types/flow";
    interface IFlowProps {
        nodes: ICanvasNode[];
        edges: ICanvasEdge[];
    }
    export class Flow extends React.PureComponent<IFlowProps> {
        render(): React.ReactChild;
    }
    export {};
}

declare module 'react-mxgraph/types/flow' {
    export interface IDrawable {
        color?: string;
        fill?: string;
        x: number | string;
        y: number | string;
    }
    export interface ILayoutNode extends IDrawable {
        id: string;
    }
    export interface ICanvasNode extends IDrawable {
        label?: string;
        name?: string;
        comment?: string;
        size?: [number, number];
        shape?: string;
        id: string;
        index: number | string;
        type: string;
        parameters?: object;
        anchorPoints?: Array<[number, number]>;
    }
    export interface ICanvasEdge {
        source: number | string;
        sourceAnchor: number | string;
        target: number | string;
        targetAnchor: number | string;
        index: number | string;
        id: string;
    }
    export interface ICanvasData {
        nodes: ICanvasNode[];
        edges: ICanvasEdge[];
    }
}

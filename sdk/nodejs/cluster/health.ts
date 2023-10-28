// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Checks the health of a Talos cluster
 */
export function health(args: HealthArgs, opts?: pulumi.InvokeOptions): Promise<HealthResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("talos:cluster/health:Health", {
        "clientConfiguration": args.clientConfiguration,
        "controlPlaneNodes": args.controlPlaneNodes,
        "endpoints": args.endpoints,
        "timeouts": args.timeouts,
        "workerNodes": args.workerNodes,
    }, opts);
}

/**
 * A collection of arguments for invoking Health.
 */
export interface HealthArgs {
    /**
     * The client configuration data
     */
    clientConfiguration: inputs.cluster.HealthClientConfiguration;
    /**
     * List of control plane nodes to check for health.
     */
    controlPlaneNodes: string[];
    /**
     * endpoints to use for the health check client. Use at least one control plane endpoint.
     */
    endpoints: string[];
    timeouts?: inputs.cluster.HealthTimeouts;
    /**
     * List of worker nodes to check for health.
     */
    workerNodes?: string[];
}

/**
 * A collection of values returned by Health.
 */
export interface HealthResult {
    /**
     * The client configuration data
     */
    readonly clientConfiguration: outputs.cluster.HealthClientConfiguration;
    /**
     * List of control plane nodes to check for health.
     */
    readonly controlPlaneNodes: string[];
    /**
     * endpoints to use for the health check client. Use at least one control plane endpoint.
     */
    readonly endpoints: string[];
    /**
     * The ID of this resource.
     */
    readonly id: string;
    readonly timeouts?: outputs.cluster.HealthTimeouts;
    /**
     * List of worker nodes to check for health.
     */
    readonly workerNodes?: string[];
}
/**
 * Checks the health of a Talos cluster
 */
export function healthOutput(args: HealthOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<HealthResult> {
    return pulumi.output(args).apply((a: any) => health(a, opts))
}

/**
 * A collection of arguments for invoking Health.
 */
export interface HealthOutputArgs {
    /**
     * The client configuration data
     */
    clientConfiguration: pulumi.Input<inputs.cluster.HealthClientConfigurationArgs>;
    /**
     * List of control plane nodes to check for health.
     */
    controlPlaneNodes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * endpoints to use for the health check client. Use at least one control plane endpoint.
     */
    endpoints: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.cluster.HealthTimeoutsArgs>;
    /**
     * List of worker nodes to check for health.
     */
    workerNodes?: pulumi.Input<pulumi.Input<string>[]>;
}

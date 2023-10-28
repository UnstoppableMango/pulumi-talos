// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Generate a machine configuration for a node type
 *
 * > **Note:** It is recommended to set the optional `talosVersion` attribute. Otherwise when using a new version of the provider with a new major version of the Talos SDK, new machineconfig features will be enabled by default which could cause unexpected behavior.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as talos from "@pulumi/talos";
 * import * as talos from "@unmango/pulumi-talos";
 *
 * const thisSecrets = new talos.machine.Secrets("thisSecrets", {});
 * const thisConfiguration = talos.machine.ConfigurationOutput({
 *     clusterName: "example-cluster",
 *     machineType: "controlplane",
 *     clusterEndpoint: "https://cluster.local:6443",
 *     machineSecrets: thisSecrets.machineSecrets,
 * });
 * ```
 */
export function configuration(args: ConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<ConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("talos:machine/configuration:Configuration", {
        "clusterEndpoint": args.clusterEndpoint,
        "clusterName": args.clusterName,
        "configPatches": args.configPatches,
        "docs": args.docs,
        "examples": args.examples,
        "kubernetesVersion": args.kubernetesVersion,
        "machineSecrets": args.machineSecrets,
        "machineType": args.machineType,
        "talosVersion": args.talosVersion,
    }, opts);
}

/**
 * A collection of arguments for invoking Configuration.
 */
export interface ConfigurationArgs {
    /**
     * The endpoint of the talos kubernetes cluster
     */
    clusterEndpoint: string;
    /**
     * The name of the talos kubernetes cluster
     */
    clusterName: string;
    /**
     * The list of config patches to apply to the generated configuration
     */
    configPatches?: string[];
    /**
     * Whether to generate documentation for the generated configuration
     */
    docs?: boolean;
    /**
     * Whether to generate examples for the generated configuration
     */
    examples?: boolean;
    /**
     * The version of kubernetes to use
     */
    kubernetesVersion?: string;
    /**
     * The secrets for the talos cluster
     */
    machineSecrets: inputs.machine.ConfigurationMachineSecrets;
    /**
     * The type of machine to generate the configuration for
     */
    machineType: string;
    /**
     * The version of talos features to use in generated machine configuration
     */
    talosVersion?: string;
}

/**
 * A collection of values returned by Configuration.
 */
export interface ConfigurationResult {
    /**
     * The endpoint of the talos kubernetes cluster
     */
    readonly clusterEndpoint: string;
    /**
     * The name of the talos kubernetes cluster
     */
    readonly clusterName: string;
    /**
     * The list of config patches to apply to the generated configuration
     */
    readonly configPatches?: string[];
    /**
     * Whether to generate documentation for the generated configuration
     */
    readonly docs?: boolean;
    /**
     * Whether to generate examples for the generated configuration
     */
    readonly examples?: boolean;
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * The version of kubernetes to use
     */
    readonly kubernetesVersion?: string;
    /**
     * The generated machine configuration
     */
    readonly machineConfiguration: string;
    /**
     * The secrets for the talos cluster
     */
    readonly machineSecrets: outputs.machine.ConfigurationMachineSecrets;
    /**
     * The type of machine to generate the configuration for
     */
    readonly machineType: string;
    /**
     * The version of talos features to use in generated machine configuration
     */
    readonly talosVersion?: string;
}
/**
 * Generate a machine configuration for a node type
 *
 * > **Note:** It is recommended to set the optional `talosVersion` attribute. Otherwise when using a new version of the provider with a new major version of the Talos SDK, new machineconfig features will be enabled by default which could cause unexpected behavior.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as talos from "@pulumi/talos";
 * import * as talos from "@unmango/pulumi-talos";
 *
 * const thisSecrets = new talos.machine.Secrets("thisSecrets", {});
 * const thisConfiguration = talos.machine.ConfigurationOutput({
 *     clusterName: "example-cluster",
 *     machineType: "controlplane",
 *     clusterEndpoint: "https://cluster.local:6443",
 *     machineSecrets: thisSecrets.machineSecrets,
 * });
 * ```
 */
export function configurationOutput(args: ConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ConfigurationResult> {
    return pulumi.output(args).apply((a: any) => configuration(a, opts))
}

/**
 * A collection of arguments for invoking Configuration.
 */
export interface ConfigurationOutputArgs {
    /**
     * The endpoint of the talos kubernetes cluster
     */
    clusterEndpoint: pulumi.Input<string>;
    /**
     * The name of the talos kubernetes cluster
     */
    clusterName: pulumi.Input<string>;
    /**
     * The list of config patches to apply to the generated configuration
     */
    configPatches?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to generate documentation for the generated configuration
     */
    docs?: pulumi.Input<boolean>;
    /**
     * Whether to generate examples for the generated configuration
     */
    examples?: pulumi.Input<boolean>;
    /**
     * The version of kubernetes to use
     */
    kubernetesVersion?: pulumi.Input<string>;
    /**
     * The secrets for the talos cluster
     */
    machineSecrets: pulumi.Input<inputs.machine.ConfigurationMachineSecretsArgs>;
    /**
     * The type of machine to generate the configuration for
     */
    machineType: pulumi.Input<string>;
    /**
     * The version of talos features to use in generated machine configuration
     */
    talosVersion?: pulumi.Input<string>;
}

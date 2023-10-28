// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export namespace client {
    export interface ConfigurationClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: string;
        /**
         * The client certificate
         */
        clientCertificate: string;
        /**
         * The client key
         */
        clientKey: string;
    }

}

export namespace cluster {
    export interface HealthClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: string;
        /**
         * The client certificate
         */
        clientCertificate: string;
        /**
         * The client key
         */
        clientKey: string;
    }

    export interface HealthTimeouts {
        /**
         * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
         */
        read?: string;
    }

    export interface KubeconfigClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: string;
        /**
         * The client certificate
         */
        clientCertificate: string;
        /**
         * The client key
         */
        clientKey: string;
    }

    export interface KubeconfigKubernetesClientConfiguration {
        /**
         * The kubernetes CA certificate
         */
        caCertificate: string;
        /**
         * The kubernetes client certificate
         */
        clientCertificate: string;
        /**
         * The kubernetes client key
         */
        clientKey: string;
        /**
         * The kubernetes host
         */
        host: string;
    }

    export interface KubeconfigTimeouts {
        /**
         * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
         */
        read?: string;
    }

}

export namespace machine {
    export interface BootstrapClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: string;
        /**
         * The client certificate
         */
        clientCertificate: string;
        /**
         * The client key
         */
        clientKey: string;
    }

    export interface BootstrapTimeouts {
        /**
         * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
         */
        create?: string;
    }

    export interface ConfigurationApplyClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: string;
        /**
         * The client certificate
         */
        clientCertificate: string;
        /**
         * The client key
         */
        clientKey: string;
    }

    export interface ConfigurationMachineSecrets {
        /**
         * The certs for the talos kubernetes cluster
         */
        certs: outputs.machine.ConfigurationMachineSecretsCerts;
        /**
         * The cluster secrets
         */
        cluster: outputs.machine.ConfigurationMachineSecretsCluster;
        /**
         * The secrets for the talos kubernetes cluster
         */
        secrets: outputs.machine.ConfigurationMachineSecretsSecrets;
        /**
         * The trustd info for the talos kubernetes cluster
         */
        trustdinfo: outputs.machine.ConfigurationMachineSecretsTrustdinfo;
    }

    export interface ConfigurationMachineSecretsCerts {
        /**
         * The certificate and key pair
         */
        etcd: outputs.machine.ConfigurationMachineSecretsCertsEtcd;
        /**
         * The certificate and key pair
         */
        k8s: outputs.machine.ConfigurationMachineSecretsCertsK8s;
        /**
         * The certificate and key pair
         */
        k8sAggregator: outputs.machine.ConfigurationMachineSecretsCertsK8sAggregator;
        k8sServiceaccount: outputs.machine.ConfigurationMachineSecretsCertsK8sServiceaccount;
        /**
         * The certificate and key pair
         */
        os: outputs.machine.ConfigurationMachineSecretsCertsOs;
    }

    export interface ConfigurationMachineSecretsCertsEtcd {
        /**
         * certificate data
         */
        cert: string;
        /**
         * key data
         */
        key: string;
    }

    export interface ConfigurationMachineSecretsCertsK8s {
        /**
         * certificate data
         */
        cert: string;
        /**
         * key data
         */
        key: string;
    }

    export interface ConfigurationMachineSecretsCertsK8sAggregator {
        /**
         * certificate data
         */
        cert: string;
        /**
         * key data
         */
        key: string;
    }

    export interface ConfigurationMachineSecretsCertsK8sServiceaccount {
        /**
         * key data
         */
        key: string;
    }

    export interface ConfigurationMachineSecretsCertsOs {
        /**
         * certificate data
         */
        cert: string;
        /**
         * key data
         */
        key: string;
    }

    export interface ConfigurationMachineSecretsCluster {
        /**
         * The cluster id
         */
        id: string;
        /**
         * The cluster secret
         */
        secret: string;
    }

    export interface ConfigurationMachineSecretsSecrets {
        /**
         * The aescbc encryption secret for the talos kubernetes cluster
         */
        aescbcEncryptionSecret?: string;
        /**
         * The bootstrap token for the talos kubernetes cluster
         */
        bootstrapToken: string;
        /**
         * The secretbox encryption secret for the talos kubernetes cluster
         */
        secretboxEncryptionSecret: string;
    }

    export interface ConfigurationMachineSecretsTrustdinfo {
        /**
         * The trustd token for the talos kubernetes cluster
         */
        token: string;
    }

    export interface DisksClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: string;
        /**
         * The client certificate
         */
        clientCertificate: string;
        /**
         * The client key
         */
        clientKey: string;
    }

    export interface DisksDisk {
        /**
         * The bus path of the disk
         */
        busPath: string;
        /**
         * The modalias of the disk
         */
        modalias: string;
        /**
         * The model of the disk
         */
        model: string;
        /**
         * The name of the disk
         */
        name: string;
        /**
         * The serial number of the disk
         */
        serial: string;
        /**
         * The size of the disk
         */
        size: string;
        /**
         * The type of the disk
         */
        type: string;
        /**
         * The uuid of the disk
         */
        uuid: string;
        /**
         * The wwid of the disk
         */
        wwid: string;
    }

    export interface DisksFilters {
        /**
         * Filter disks by bus path
         */
        busPath?: string;
        /**
         * Filter disks by modalias
         */
        modalias?: string;
        /**
         * Filter disks by model
         */
        model?: string;
        /**
         * Filter disks by name
         */
        name?: string;
        /**
         * Filter disks by serial number
         */
        serial?: string;
        /**
         * Filter disks by size
         */
        size?: string;
        /**
         * Filter disks by type
         */
        type?: string;
        /**
         * Filter disks by uuid
         */
        uuid?: string;
        /**
         * Filter disks by wwid
         */
        wwid?: string;
    }

    export interface DisksTimeouts {
        /**
         * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
         */
        read?: string;
    }

    export interface SecretsClientConfiguration {
        /**
         * The client CA certificate
         */
        caCertificate: string;
        /**
         * The client certificate
         */
        clientCertificate: string;
        /**
         * The client key
         */
        clientKey: string;
    }

    export interface SecretsMachineSecrets {
        certs: outputs.machine.SecretsMachineSecretsCerts;
        /**
         * The cluster secrets
         */
        cluster: outputs.machine.SecretsMachineSecretsCluster;
        /**
         * kubernetes cluster secrets
         */
        secrets: outputs.machine.SecretsMachineSecretsSecrets;
        /**
         * trustd secrets
         */
        trustdinfo: outputs.machine.SecretsMachineSecretsTrustdinfo;
    }

    export interface SecretsMachineSecretsCerts {
        /**
         * The certificate and key pair
         */
        etcd: outputs.machine.SecretsMachineSecretsCertsEtcd;
        /**
         * The certificate and key pair
         */
        k8s: outputs.machine.SecretsMachineSecretsCertsK8s;
        /**
         * The certificate and key pair
         */
        k8sAggregator: outputs.machine.SecretsMachineSecretsCertsK8sAggregator;
        /**
         * The service account secrets
         */
        k8sServiceaccount: outputs.machine.SecretsMachineSecretsCertsK8sServiceaccount;
        /**
         * The certificate and key pair
         */
        os: outputs.machine.SecretsMachineSecretsCertsOs;
    }

    export interface SecretsMachineSecretsCertsEtcd {
        /**
         * certificate data
         */
        cert: string;
        /**
         * key data
         */
        key: string;
    }

    export interface SecretsMachineSecretsCertsK8s {
        /**
         * certificate data
         */
        cert: string;
        /**
         * key data
         */
        key: string;
    }

    export interface SecretsMachineSecretsCertsK8sAggregator {
        /**
         * certificate data
         */
        cert: string;
        /**
         * key data
         */
        key: string;
    }

    export interface SecretsMachineSecretsCertsK8sServiceaccount {
        /**
         * key data
         */
        key: string;
    }

    export interface SecretsMachineSecretsCertsOs {
        /**
         * certificate data
         */
        cert: string;
        /**
         * key data
         */
        key: string;
    }

    export interface SecretsMachineSecretsCluster {
        /**
         * The cluster ID
         */
        id: string;
        /**
         * The cluster secret
         */
        secret: string;
    }

    export interface SecretsMachineSecretsSecrets {
        /**
         * The AES-CBC encryption secret
         */
        aescbcEncryptionSecret: string;
        /**
         * The bootstrap token
         */
        bootstrapToken: string;
        /**
         * The secretbox encryption secret
         */
        secretboxEncryptionSecret: string;
    }

    export interface SecretsMachineSecretsTrustdinfo {
        /**
         * The trustd token
         */
        token: string;
    }

    export interface Timeout {
        /**
         * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
         */
        create?: string;
        /**
         * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
         */
        update?: string;
    }

}

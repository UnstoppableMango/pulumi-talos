// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Talos.Machine.Outputs
{

    /// <summary>
    /// A complete Machine Secrets configuration
    /// </summary>
    [OutputType]
    public sealed class MachineSecretsResult
    {
        public readonly Outputs.CertificatesResult Certs;
        public readonly Outputs.ClusterResult Cluster;
        public readonly Outputs.SecretsResult Secrets;
        public readonly Outputs.TrustdInfoResult Trustdinfo;

        [OutputConstructor]
        private MachineSecretsResult(
            Outputs.CertificatesResult certs,

            Outputs.ClusterResult cluster,

            Outputs.SecretsResult secrets,

            Outputs.TrustdInfoResult trustdinfo)
        {
            Certs = certs;
            Cluster = cluster;
            Secrets = secrets;
            Trustdinfo = trustdinfo;
        }
    }
}

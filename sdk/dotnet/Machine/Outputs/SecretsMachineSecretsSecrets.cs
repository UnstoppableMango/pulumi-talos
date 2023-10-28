// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace UnMango.Talos.Machine.Outputs
{

    [OutputType]
    public sealed class SecretsMachineSecretsSecrets
    {
        /// <summary>
        /// The AES-CBC encryption secret
        /// </summary>
        public readonly string? AescbcEncryptionSecret;
        /// <summary>
        /// The bootstrap token
        /// </summary>
        public readonly string? BootstrapToken;
        /// <summary>
        /// The secretbox encryption secret
        /// </summary>
        public readonly string? SecretboxEncryptionSecret;

        [OutputConstructor]
        private SecretsMachineSecretsSecrets(
            string? aescbcEncryptionSecret,

            string? bootstrapToken,

            string? secretboxEncryptionSecret)
        {
            AescbcEncryptionSecret = aescbcEncryptionSecret;
            BootstrapToken = bootstrapToken;
            SecretboxEncryptionSecret = secretboxEncryptionSecret;
        }
    }
}

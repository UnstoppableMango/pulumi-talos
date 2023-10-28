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
    public sealed class ConfigurationApplyClientConfiguration
    {
        /// <summary>
        /// The client CA certificate
        /// </summary>
        public readonly string CaCertificate;
        /// <summary>
        /// The client certificate
        /// </summary>
        public readonly string ClientCertificate;
        /// <summary>
        /// The client key
        /// </summary>
        public readonly string ClientKey;

        [OutputConstructor]
        private ConfigurationApplyClientConfiguration(
            string caCertificate,

            string clientCertificate,

            string clientKey)
        {
            CaCertificate = caCertificate;
            ClientCertificate = clientCertificate;
            ClientKey = clientKey;
        }
    }
}

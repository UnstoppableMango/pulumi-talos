// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Talos.Machine.Inputs
{

    /// <summary>
    /// A Machine Secrets Bootstrap data
    /// </summary>
    public sealed class SecretsInputArgs : global::Pulumi.ResourceArgs
    {
        [Input("bootstrap_token", required: true)]
        private Input<string>? _bootstrap_token;

        /// <summary>
        /// The bootstrap token for the talos kubernetes cluster
        /// </summary>
        public Input<string>? Bootstrap_token
        {
            get => _bootstrap_token;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _bootstrap_token = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        [Input("secretbox_encryption_secret", required: true)]
        private Input<string>? _secretbox_encryption_secret;

        /// <summary>
        /// The secretbox encryption secret for the talos kubernetes cluster
        /// </summary>
        public Input<string>? Secretbox_encryption_secret
        {
            get => _secretbox_encryption_secret;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _secretbox_encryption_secret = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        public SecretsInputArgs()
        {
        }
        public static new SecretsInputArgs Empty => new SecretsInputArgs();
    }
}

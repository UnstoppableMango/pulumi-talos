// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace UnMango.Talos.Machine.Inputs
{

    public sealed class SecretsMachineSecretsCertsK8sServiceaccountGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("key")]
        private Input<string>? _key;

        /// <summary>
        /// key data
        /// </summary>
        public Input<string>? Key
        {
            get => _key;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _key = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        public SecretsMachineSecretsCertsK8sServiceaccountGetArgs()
        {
        }
        public static new SecretsMachineSecretsCertsK8sServiceaccountGetArgs Empty => new SecretsMachineSecretsCertsK8sServiceaccountGetArgs();
    }
}

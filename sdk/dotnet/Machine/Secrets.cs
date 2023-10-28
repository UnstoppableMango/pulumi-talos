// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace UnMango.Talos.Machine
{
    /// <summary>
    /// Generate machine secrets for Talos cluster.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using System.Collections.Generic;
    /// using System.Linq;
    /// using Pulumi;
    /// using Talos = UnMango.Talos;
    /// 
    /// return await Deployment.RunAsync(() =&gt; 
    /// {
    ///     var machineSecrets = new Talos.Machine.Secrets("machineSecrets");
    /// 
    /// });
    /// ```
    /// 
    /// ## Import
    /// 
    /// terraform machine secrets can be imported from an existing secrets file
    /// 
    /// ```sh
    ///  $ pulumi import talos:machine/secrets:Secrets this &lt;path-to-secrets.yaml&gt;
    /// ```
    /// </summary>
    [TalosResourceType("talos:machine/secrets:Secrets")]
    public partial class Secrets : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The generated client configuration data
        /// </summary>
        [Output("clientConfiguration")]
        public Output<Outputs.SecretsClientConfiguration> ClientConfiguration { get; private set; } = null!;

        /// <summary>
        /// The secrets for the talos cluster
        /// </summary>
        [Output("machineSecrets")]
        public Output<Outputs.SecretsMachineSecrets> MachineSecrets { get; private set; } = null!;

        /// <summary>
        /// The version of talos features to use in generated machine configuration
        /// </summary>
        [Output("talosVersion")]
        public Output<string> TalosVersion { get; private set; } = null!;


        /// <summary>
        /// Create a Secrets resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Secrets(string name, SecretsArgs? args = null, CustomResourceOptions? options = null)
            : base("talos:machine/secrets:Secrets", name, args ?? new SecretsArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Secrets(string name, Input<string> id, SecretsState? state = null, CustomResourceOptions? options = null)
            : base("talos:machine/secrets:Secrets", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                PluginDownloadURL = "github://api.github.com/UnstoppableMango/pulumi-talos",
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Secrets resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Secrets Get(string name, Input<string> id, SecretsState? state = null, CustomResourceOptions? options = null)
        {
            return new Secrets(name, id, state, options);
        }
    }

    public sealed class SecretsArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The version of talos features to use in generated machine configuration
        /// </summary>
        [Input("talosVersion")]
        public Input<string>? TalosVersion { get; set; }

        public SecretsArgs()
        {
        }
        public static new SecretsArgs Empty => new SecretsArgs();
    }

    public sealed class SecretsState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The generated client configuration data
        /// </summary>
        [Input("clientConfiguration")]
        public Input<Inputs.SecretsClientConfigurationGetArgs>? ClientConfiguration { get; set; }

        /// <summary>
        /// The secrets for the talos cluster
        /// </summary>
        [Input("machineSecrets")]
        public Input<Inputs.SecretsMachineSecretsGetArgs>? MachineSecrets { get; set; }

        /// <summary>
        /// The version of talos features to use in generated machine configuration
        /// </summary>
        [Input("talosVersion")]
        public Input<string>? TalosVersion { get; set; }

        public SecretsState()
        {
        }
        public static new SecretsState Empty => new SecretsState();
    }
}

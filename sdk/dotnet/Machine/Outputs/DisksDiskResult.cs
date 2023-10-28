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
    public sealed class DisksDiskResult
    {
        /// <summary>
        /// The bus path of the disk
        /// </summary>
        public readonly string BusPath;
        /// <summary>
        /// The modalias of the disk
        /// </summary>
        public readonly string Modalias;
        /// <summary>
        /// The model of the disk
        /// </summary>
        public readonly string Model;
        /// <summary>
        /// The name of the disk
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The serial number of the disk
        /// </summary>
        public readonly string Serial;
        /// <summary>
        /// The size of the disk
        /// </summary>
        public readonly string Size;
        /// <summary>
        /// The type of the disk
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The uuid of the disk
        /// </summary>
        public readonly string Uuid;
        /// <summary>
        /// The wwid of the disk
        /// </summary>
        public readonly string Wwid;

        [OutputConstructor]
        private DisksDiskResult(
            string busPath,

            string modalias,

            string model,

            string name,

            string serial,

            string size,

            string type,

            string uuid,

            string wwid)
        {
            BusPath = busPath;
            Modalias = modalias;
            Model = model;
            Name = name;
            Serial = serial;
            Size = size;
            Type = type;
            Uuid = uuid;
            Wwid = wwid;
        }
    }
}

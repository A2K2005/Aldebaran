import { PermissionString as DJSPermission } from "discord.js";
import { PermissionString as AldebaranPermission } from "../utils/Constants";
import { Args } from "./Arg";

export default interface CommandMetadata {
	aliases: string[],
	allowIndexCommand: boolean,
	allowUnknownSubcommands: boolean,
	args: Args,
	cooldown: {
		group: string,
		amount: number,
		resetInterval: number
	},
	description: string,
	example: string,
	help: string,
	name: string,
	perms: {
		discord: DJSPermission[],
		aldebaran: AldebaranPermission[]
	},
	subcommand: boolean,
	usage: string,
}

{
	"binhacks": {
		"min_trance": {
			"expected": "81 3D 08 E8 4B 00 58 02 00 00",
			"code": "81 3D 08 E8 4B 00 C8 00 00 00",
			"addr": "0x00405815",
			"title": "Change required amount of gauge fill to activate a trance from 600 to 200."
		},
		"trance_check_hitbox": {
			"expected": "74 09",
			"code": "EB 09",
			"addr": "0x00444157",
			"title": "Make the game check hitboxes while in trance mode (for bullets/enemies)."
		},
		"trance_check_hitbox_laser": {
			"expected": "0F 85 6A 02 00 00",
			"code": "90 90 90 90 90 90",
			"addr": "0x0044427A",
			"title": "Make the game check hitboxes while in trance mode (for lasers)."
		},
		"trance_no_invuln": {
			"expected": "F7 05 30 E8 4B 00 00 01 00 00 0F 85 30 01 00 00",
			"code": "E9 36 C6 05 00 90 90 90 90 90 90 90 90 90 90 90",
			"addr": "0x00444CA4",
			"title": "Removes trance invincibility and makes the trance instantly end if player gets hit (actually jumps to codecave, doesn't do that here)."
		},
		"max_trance_gauge": {
			"expected": "3D 58 02 00 00 7E 06 C7 06 58 02 00 00",
			"code": "3D E8 03 00 00 7E 06 C7 06 E8 03 00 00",
			"addr": "0x0043D53F",
			"title": "Change maximum trance gauge capacity from 600 to 1800."
		},
		"reimu_ability_disable": {
			"expected": "0F85 A5010000",
			"code": "E9 A6010000 90",
			"addr": "0x004388A8",
			"title": "Removes Reimu's special ability during trance (drawing the spirits toward herself)"
		},
		"marisa_ability_disable": {
			"expected": "75 1E",
			"code": "EB 1E",
			"addr": "0x00442BDB",
			"title": "Removes Marisa's special ability during trance (super fast movement)"
		},
		"trance_layering_stuff": {
			"expected": "75 05",
			"code": "90 90",
			"addr": "0x0040E7CC",
			"title": "Disable alternate layering during trance mode."
		},
		"small_hitboxes": {
			"code": "0000803F 0000803F 0000803F 0000803F",
			"addr": "0x004C0BA8",
			"title": "Small hitboxes for every character"
		},
		"no_auto_trance_on_death": {
			"code": "90 90 90 90 90 90 90",
			"addr": "0x00444A38",
			"title": "Remove the autotrance when player gets hit."
		},
		"no_auto_trance_on_death_2": {
			"code": "EB",
			"addr": "0x00444A41",
			"title": "Remove the autotrance when player gets hit (part 2)"
		},
		"no_empty_trance_on_death": {
			"code": "90 90 90 90 90 90",
			"addr": "0x004435D9",
			"title": "Don't reset trance gauge on death, unless that death happened while trancing."
		},
		"codecave_jmp": {
			"expected": "81 0D 30 E8 4B 00 00 01 00 00",
			"code": "E9 10 B8 09 00 90 90 90 90 90",
			"addr": "0x00405A60",
			"title": "Jump to the codecave when a trance is started."
		},
		"codecave_jmp2": {
			"expected": "8D 54 02 6B 52",
			"code": "E9 DA 3C 06 00",
			"addr": "0x0043D5D3",
			"title": "Jump to codecave when determining the ANM script number to be used when filling up a segment of the trance gauge."
		},
		"codecave_jmp3": {
			"code": "E9 522E0700",
			"addr": "0x0042E468",
			"title": "Jump to codecave when determining whether the items should be PoCed or not."
		},
		"codecave": {
			"code": "50 51 52 E8 73 0B F7 FF A1 C4 22 4C 00 C7 80 88 46 01 00 64 00 00 00 C7 80 84 46 01 00 63 00 00 00 C7 80 8C 46 01 00 00 00 C8 42 5A 59 58 81 0D 30 E8 4B 00 00 01 00 00 E9 B8 47 F6 FF 8D 94 10 F3 00 00 00 52 E9 19 C3 F9 FF DF E0 F6 C4 41 0F 84 BB D1 F8 FF F7 05 30 E8 4B 00 00 01 00 00 0F 85 AB D1 F8 FF E9 98 D1 F8 FF 83 3D 0C E8 4B 00 02 0F 85 C8 39 FA FF 31 C0 A3 08 E8 4B 00 E9 BC 39 FA FF",
			"addr": "0x004A1275",
			"title": "Code responsible for screen clear and iframes when trance starts, and for making the correct sprites appear when filling up segments of the trance gauge."
		},
		"version_string": {
			"code": "30 2E 30 30 61",
			"addr": "0x004AD20C",
			"title": "Change displayed version string of the game window"
		}
	},
	"title": "Touhou Black Label 01 - Desire.EXE v0.01a (Original Game)"
}
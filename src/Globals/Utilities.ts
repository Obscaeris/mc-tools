function createObjective(objective_name:string): string {
    return `/scoreboard objectives add ${objective_name} dummy`;
}

export function generateBooleanCommand(score_name:string, condition:string): string[] {
    let cmd_on = `execute as @a if ${condition} unless score @s ${score_name} matches 1 run scoreboard players set @s ${score_name} 1`;
    let cmd_off = `execute as @a unless ${condition} unless score @s ${score_name} matches 0 run scoreboard players set @s ${score_name} 0`;
    return [createObjective(score_name),cmd_on, cmd_off];
}

export function generateToggleableCommand(score_name:string, activation_condition:string, condition:string): string[] {
    let cmd_activate = `execute as @a if ${activation_condition} if score @s ${score_name} matches 0 run scoreboard players set @s ${score_name} 1`;
    let cmd_on = `execute as @a if ${condition} unless score @s ${score_name} matches 2 if score @s ${score_name} matches 1 run scoreboard players set @s ${score_name} 2`;
    let cmd_off = `execute as @a unless ${condition} if score @s ${score_name} matches 2 run scoreboard players set @s ${score_name} 1`;
    return [createObjective(score_name),cmd_activate, cmd_on, cmd_off];
}
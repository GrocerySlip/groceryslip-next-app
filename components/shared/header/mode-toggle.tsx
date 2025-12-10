'use client';

import {
    DropdownMenu, DropdownMenuTrigger,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent,
    DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunMoon, SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const ModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mouted,setMounted]=useState(false);

    useEffect(()=>{
        setMounted(true);
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
                    {theme === 'system' ? (
                        <SunMoon />
                    ) : theme === 'dark' ? (
                        <MoonIcon />
                    ) : (
                        <SunIcon />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Apperance</DropdownMenuLabel>
                    <DropdownMenuSeparator>
                        <DropdownMenuCheckboxItem 
                        checked={theme==='system'}
                        onClick={()=>setTheme('system')}
                        > System
                        </DropdownMenuCheckboxItem>

                        <DropdownMenuCheckboxItem 
                        checked={theme==='dark'}
                        onClick={()=>setTheme('dark')}
                        > Dark
                        </DropdownMenuCheckboxItem>

                        <DropdownMenuCheckboxItem 
                        checked={theme==='light'}
                        onClick={()=>setTheme('light')}
                        >Light
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuSeparator>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default ModeToggle;
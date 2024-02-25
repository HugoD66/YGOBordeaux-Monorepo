import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class SanitizeGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}

import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common"
import * as sanitizeHtml from "sanitize-html"

@Injectable()
export class SanitizeGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const body = request.body

    console.log(`Original message: ${body.message}`)

    if (body.message) {
      request.body.message = sanitizeHtml(body.message, {
        allowedTags: [],
        allowedAttributes: {},
      })

      console.log(`Sanitized message: ${request.body.message}`) // Log du message nettoyé
    } else {
      console.log(`No message to sanitize`)
    }

    return true
  }
}

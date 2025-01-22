package registrationalarm.external;

import java.util.Date;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name = "notification", url = "${api.url.notification}")
public interface NotificationService {
    @RequestMapping(method = RequestMethod.POST, path = "/notifications")
    public void scheduleNotification(@RequestBody Notification notification);

    @RequestMapping(method = RequestMethod.POST, path = "/notifications")
    public void deleteNotification(@RequestBody Notification notification);

    @RequestMapping(method = RequestMethod.POST, path = "/notifications")
    public void scheduleNotification(@RequestBody Notification notification);
}

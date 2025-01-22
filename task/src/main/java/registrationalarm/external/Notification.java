package registrationalarm.external;

import java.util.Date;
import lombok.Data;

@Data
public class Notification {

    private String notificationId;
    private String userId;
    private String taskId;
}

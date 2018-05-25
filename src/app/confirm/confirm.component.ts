import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../service/reservation.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  reservationData$ = this.service.getAllReservation();

  constructor(private service: ReservationService) {
  }

  ngOnInit() {
  }

  acceptReservation(id) {
    this.service.acceptReservation(id).subscribe(() => {
      alert('Reservasi Berhasil Diterima');
      this.reservationData$ = this.service.getAllReservation();
    });
  }

  rejectReservation(id) {
    this.service.rejectReservation(id).subscribe(() => {
      alert('Reservasi Berhasil Ditolak');
      this.reservationData$ = this.service.getAllReservation();
    });
  }
}
